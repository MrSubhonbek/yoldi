import routes from "@/assets/api/routes";
import { IAuth } from "@/assets/types";

async function auth(url: string, data: IAuth) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function getProfile(url: string, key: string) {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": key,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
  return response.json();
}

export const getKeyLogin = async (
  data: IAuth,
  error: (value: string) => void
) => {
  const user = await auth(routes.login, data);
  if (user.message && !user.value) error(user.message);
  else {
    error("");
    return user.value;
  }
};

export const getKeyRegister = async (
  data: IAuth,
  error: (value: string) => void
) => {
  const user = await auth(routes.register, data);
  if (user.message && !user.value) error(user.message);
  else {
    error("");
    return user.value;
  }
};
/*
есть другой способ через useSWRConfig 
но думаю что это кастыль и не стал использовать(
const { mutate, cache } = useSWRConfig();
mutate(
      routes.register,
      fetcher(routes.register, {
        method: "POST",
        headers: {
          "X-API-KEY": "",
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, email, name }),
      })
mutate(
        routes.profile,
        fetcher(routes.profile, {
          method: "GET",
          headers: {
            "X-API-KEY": `${cache.get(routes.register)?.data.value}`,
            accept: "application/json",
            "Content-Type": "application/json",
          },
        })
      );
*/
