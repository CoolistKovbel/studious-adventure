import LoginForm from "@/app/components/auth/login-form";
import LoginMetaForm from "@/app/components/auth/login-meta-form";

const Page = async () => {
  return (
    <section className="w-[80%] h-[90%] p-8 rounded-lg border-2 border-gray-800 drop-shadow-lg relative">
      {/* Basic client login */}
      <LoginForm />

      {/* Client MEta */}
      <LoginMetaForm />
    </section>
  );
};

export default Page;
