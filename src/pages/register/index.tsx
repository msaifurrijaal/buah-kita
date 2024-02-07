import RegisterForm from "../../components/fragments/register/RegisterForm";
import AuthLayout from "../../components/partials/auth/AuthLayout";

const RegisterPage = () => {
    return (
        <AuthLayout title="Daftar" navigationType="register">
            <RegisterForm />
        </AuthLayout>
    )
}

export default RegisterPage;