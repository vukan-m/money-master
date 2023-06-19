import React, { cloneElement, ReactElement, ReactNode, useMemo } from "react";
import { Control, Controller, UseFormReturn, useWatch } from "react-hook-form";
import { TextInput } from "react-native";
import { FormDependencyType } from "../types";

const DependencyWrapper: React.FC<{
  children: ReactElement<any>;
  control: Control;
  dependencies: Array<FormDependencyType>;
}> = props => {
  const values = useWatch({ control: props?.control, name: props?.dependencies?.map(d => d?.name) });

  const deps = useMemo(
    () =>
      values?.map?.((v, index) => ({
        name: props?.dependencies?.[index]?.name,
        visibleWhen: props?.dependencies?.[index]?.visibleWhen,
        value: v,
      })),
    [values],
  );

  if (deps?.every(d => d?.visibleWhen?.(d?.value)) || !deps) {
    return <>{props?.children}</>;
  }
  return null;
};

const FormItemWrapper: React.FC<
  UseFormReturn<any> & {
    children: ReactNode;
    Inputs?: React.MutableRefObject<Array<TextInput | null>>;
    index?: number;
  }
> = props => {
  const { Inputs, index } = props;

  return (
    <DependencyWrapper control={props?.control} dependencies={(props?.children as any)?.props?.dependencies}>
      <Controller
        shouldUnregister={!(props?.children as any)?.props?.dontUnregisterWhenNotVisible}
        name={(props?.children as any)?.props?.name}
        control={props?.control}
        rules={(props?.children as any)?.props?.rules}
        render={({ field: { onChange, onBlur, value } }) =>
          cloneElement(props?.children as any, {
            onChange,
            onBlur,
            value,
            name: (props?.children as any)?.props?.name,
            Inputs,
            index,
            control: props?.control,
            setValue: props?.setValue,
            getValues: props?.getValues,
          })
        }
      />
    </DependencyWrapper>
  );
};

export default FormItemWrapper;
