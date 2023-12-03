import { useForm } from "react-hook-form";
function App() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit"
  });

  const onSubmit = () => {
    reset({login: "", firstName: "", lastName: ""});
  };
  return (
    <div className="App">
      <h1>React Hook Form for IPZ</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label>
          Login:
          <input
            {...register("login", {
              required: "Поле обов'язкове для заповнення!",
              pattern: {
                value: /[a-zA-Z]/,
                message: "русский военный корабль иди..."
              }
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.login && (
            <p> {errors?.login?.message || "Error!"} </p>
          )}
        </div>
      <label>
          FirstName:
          <input
            {...register("firstName", {
              required: "Поле обов'язкове для заповнення!",
              minLength: {
                value: 5,
                message: "Мінімальне значення 5"
              }
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.firstName && (
            <p> {errors?.firstName?.message || "Error!"} </p>
          )}
        </div>
        <label>
          LastName:
          <input
            {...register("lastName", {
              required: "Поле обов'язкове для заповнення!",
              minLength: {
                value: 5,
                message: "Мінімальне значення 5",
              },
              maxLength: {
                value: 25,
                message: "Максимальне значення 25"
              }
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.lastName && (
            <p> {errors?.lastName?.message || "Error!"} </p>
          )}
        </div>



        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
