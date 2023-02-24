import { Controller, useFormContext } from "react-hook-form";
import { CustomTextField } from "../TextFieldStyle";
import { InputAdornment } from "@mui/material";
// The following imports will "'prevent' a 'Font Awesome icon' ''SSR' bug,'" where an icon would "'flash' from an 'exaggerated' to a 'standard' one:"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignature } from "@fortawesome/free-solid-svg-icons";

// "Prevent" Font Awesome from "'adding' its 'CSS'" since it'd already been "'manually' added:"
config.autoAddCss = false;

export default function Name() {
  const {
    control,
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue={''}
      name={'fullName'}
      render={({ field: { ref, value } }) => (
        <CustomTextField
          className={'!w-full'}
          error={!!errors.fullName}
          helperText={
            errors.fullName ? 'Please enter your full name with leading caps ' : null
          }
          InputProps={{
            endAdornment: (
              <InputAdornment
                className={'!h-fit !text-3xl sm:!text-4xl !text-pink-400'}
                position={'end'}
              >
                <FontAwesomeIcon icon={faSignature} />
              </InputAdornment>
            ),
          }}
          inputRef={ref}
          label={'Full Name *'}
          placeholder={'John / Jane Doe'}
          {...register('fullName', {
            onBlur: undefined,
            onChange: undefined,
            pattern: /^[A-Z]+(([',. -][A-Z ])?[a-zA-Z]*)*$/g,
            required: true,
          })}
          value={value}
          variant={'outlined'}
        />
      )}
    />
  );
}
