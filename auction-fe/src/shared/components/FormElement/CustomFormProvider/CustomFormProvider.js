import { memo } from "react";
import { FormProvider } from "react-hook-form";

const CustomFormProvider = (props) => {
  return <FormProvider {...props}>{props.children}</FormProvider>;
};

export default memo(CustomFormProvider);
