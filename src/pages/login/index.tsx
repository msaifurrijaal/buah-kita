import LoginForm from "../../components/fragments/login/LoginForm";
import { useAfterLogin } from "../../components/hooks/useAuth";
import AuthLayout from "../../components/partials/auth/AuthLayout";

const LoginPage = () => {
  useAfterLogin();
  return (
    <AuthLayout title="Masuk" navigationType="login">
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
