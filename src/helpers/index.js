import { nanoid as nonSecureNanoId } from "nanoid/non-secure";
import { nanoid as secureNanoId } from "nanoid";

export const useIdGenerator = (option) => {
  const generator = option?.secure ? secureNanoId : nonSecureNanoId;

  return generator(option?.size);
};

export const formatPhoneNumber = (input, isRevese = false) => {
  if (input.startsWith("+62")) {
    const check_input = input.slice(3);
    return `0${check_input}`;
  }
  if (input.startsWith("62")) {
    const check_input = input.slice(2);
    return `0${check_input}`;
  }
  if (input.startsWith("0")) {
    return input;
  }
};
