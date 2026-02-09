"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";

declare global {
  interface Window {
    turnstile?: {
      render: (element: string | HTMLElement, options: {
        sitekey: string;
        callback: (token: string) => void;
      }) => string;
      reset: (widgetId: string) => void;
    };
  }
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [turnstileToken, setTurnstileToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string>("");

  useEffect(() => {
    // Turnstileスクリプトを読み込み
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.turnstile && turnstileRef.current) {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "",
          callback: (token: string) => {
            setTurnstileToken(token);
          },
        });
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!turnstileToken) {
      alert("スパム対策の確認が完了していません。少々お待ちください。");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTurnstileToken("");
        
        // Turnstileをリセット
        if (window.turnstile && widgetIdRef.current) {
          window.turnstile.reset(widgetIdRef.current);
        }
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-text-primary font-medium mb-2"
        >
          お名前 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-pastel-pink focus:outline-none focus:ring-2 focus:ring-pastel-pink/20 transition-all"
          placeholder="山田 太郎"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-text-primary font-medium mb-2"
        >
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-pastel-pink focus:outline-none focus:ring-2 focus:ring-pastel-pink/20 transition-all"
          placeholder="example@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-text-primary font-medium mb-2"
        >
          お問い合わせ内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-pastel-pink focus:outline-none focus:ring-2 focus:ring-pastel-pink/20 transition-all resize-none"
          placeholder="お問い合わせ内容をご記入ください"
        />
      </div>

      <div ref={turnstileRef} className="flex justify-center" />

      {submitStatus === "success" && (
        <div className="p-4 bg-pastel-green rounded-2xl text-text-primary text-center">
          送信が完了しました。お問い合わせありがとうございます。
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-100 rounded-2xl text-red-600 text-center">
          送信に失敗しました。もう一度お試しください。
        </div>
      )}

      <div className="text-center">
        <Button
          type="submit"
          variant="primary"
          className="w-full sm:w-auto"
        >
          {isSubmitting ? "送信中..." : "送信する"}
        </Button>
      </div>
    </form>
  );
}
