import { nanoid as nonSecureNanoId } from "nanoid/non-secure";
import { nanoid as secureNanoId } from "nanoid";

export const useIdGenerator = (option) => {
  const generator = option?.secure ? secureNanoId : nonSecureNanoId;

  return generator(option?.size);
};
