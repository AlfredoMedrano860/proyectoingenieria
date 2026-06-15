import { useTranslation } from "react-i18next";
import InputSpace from "../ui/InputSpace";
import PrimaryButton from "../ui/PrimaryButton";

interface StepEmailProps {
  email: string;
  onEmailChange: (value: string) => void;
  onSubmit: () => void;
}

function StepEmail({ email, onEmailChange, onSubmit }: StepEmailProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h1 className="color-primary text-3xl font-bold">{t("forgotPassword.email.title")}</h1>
        <p className="text-gray-400 text-sm mt-3 leading-5">
          {t("forgotPassword.email.description")}
        </p>
      </div>

      <InputSpace type="text" placeholder={t("forgotPassword.email.email")} hint="ejemplo@gmail.com" value={email} onChange={onEmailChange} />

      <PrimaryButton text={t("forgotPassword.email.submit")} onClick={onSubmit} />
    </div>
  );
}

export default StepEmail;
