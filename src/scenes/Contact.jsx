import { useForm } from "react-hook-form";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="contact py-48 h-[calc(100vh-160px)]">

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <div className="basis-1/3 justify-center">
          <p className="font-playfair font-semibold text-4xl text-blue mb-10">
          CONTACT ME
          </p>
          <div className="hidden md:block">
          <SocialMediaIcons/>
          </div>
          
        </div>

        <div className="basis-2/3 mt-10 md:mt-0">
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/b9876419163d97b56d49a94eb1987d00"
            method="POST"
          >
            <input
              className="w-full bg-white text-deep-blue font-semibold placeholder-opaque-black p-3 rounded-[10px] font-playfair"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full bg-white text-deep-blue font-semibold placeholder-opaque-black p-3 mt-5 rounded-[10px] font-playfair"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full bg-white text-deep-blue font-semibold placeholder-opaque-black p-3 mt-5 rounded-[10px] font-playfair"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              className="p-5 bg-tael font-semibold text-white mt-5 hover:bg-red hover:text-deep-blue transition duration-500 rounded-[10px] font-playfair"
              type="submit"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
