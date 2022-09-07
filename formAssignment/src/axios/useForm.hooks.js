import axios from "axios";

export default function UseFormHooks() {
  const Formsubmit = (formvalue) => {
    const val = JSON.stringify(formvalue);
    axios
      .post(`https://dev.api.klaim.yousted.org/api/visitor/store`, val)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    Formsubmit,
  };
}
