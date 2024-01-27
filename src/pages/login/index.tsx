import LoginForm from "../../components/fragments/login/LoginForm";
import AuthLayout from "../../components/partials/auth/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title="Masuk" navigationType="login">
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
