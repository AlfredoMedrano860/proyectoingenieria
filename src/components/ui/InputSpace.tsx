import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputSpaceProps {
  type?: "text" | "password";
  placeholder?: string;
  hint?: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
}

function InputSpace({ type = "text", placeholder, hint, value, onChange, multiline = false }: InputSpaceProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  if (multiline) {
    return (
      <div className="w-full space-y-1.5">
        {placeholder && (
          <label className="block text-sm font-medium text-gray-700 px-1">{placeholder}</label>
        )}
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={hint}
          rows={4}
          className="w-full rounded-3xl px-5 py-3 bg-input text-black text-sm outline-none resize-none placeholder:text-gray-400"
        />
      </div>
    );
  }

  return (
    <div className="w-full space-y-1.5">
      {placeholder && (
        <label className="block text-sm font-medium text-gray-700 px-1">{placeholder}</label>
      )}
      <div className="relative">
        <input
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={hint}
          className={`w-full h-14 rounded-full px-5 bg-input text-black text-sm outline-none placeholder:text-gray-400 [&::-ms-reveal]:hidden [&::-webkit-contacts-auto-fill-button]:hidden [&::-webkit-credentials-auto-fill-button]:hidden${isPassword ? " pr-12" : ""}`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        )}
      </div>
    </div>
  );
}

export default InputSpace;
