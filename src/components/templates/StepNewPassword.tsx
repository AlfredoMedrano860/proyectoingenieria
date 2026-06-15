import { useTranslation } from "react-i18next";
import InputSpace from "../ui/InputSpace";
import PrimaryButton from "../ui/PrimaryButton";

interface StepNewPasswordProps {
  password: string;
  onPasswordChange: (value: string) => void;
  confirm: string;
  onConfirmChange: (value: string) => void;
  onSubmit: () => void;
}

function StepNewPassword({ password, onPasswordChange, confirm, onConfirmChange, onSubmit }: StepNewPasswordProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h1 className="color-primary text-3xl font-bold">{t("forgotPassword.newPassword.title")}</h1>
        <p className="text-gray-400 text-sm mt-3 leading-5">
          {t("forgotPassword.newPassword.description")}
        </p>
      </div>

      <InputSpace type="password" placeholder={t("forgotPassword.newPassword.newPassword")} hint="Mínimo 8 caracteres" value={password} onChange={onPasswordChange} />
      <InputSpace type="password" placeholder={t("forgotPassword.newPassword.confirm")} hint="Repetí tu contraseña" value={confirm} onChange={onConfirmChange} />

      <PrimaryButton text={t("forgotPassword.newPassword.submit")} onClick={onSubmit} />
    </div>
  );
}

export default StepNewPassword;
