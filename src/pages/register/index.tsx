import RegisterForm from "../../components/fragments/register/RegisterForm";
import { useAfterLogin } from "../../components/hooks/useAuth"
import AuthLayout from "../../components/partials/auth/AuthLayout";

const RegisterPage = () => {
    useAfterLogin();
    return (
        <AuthLayout title="Daftar" navigationType="register">
            <RegisterForm />
        </AuthLayout>
    )
}

export default RegisterPage;