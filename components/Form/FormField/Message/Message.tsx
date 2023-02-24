import { Controller, useFormContext } from "react-hook-form";
import { CustomTextField } from "../TextFieldStyle";
import { InputAdornment } from "@mui/material";
// The following imports will "'prevent' a 'Font Awesome icon' ''SSR' bug,'" where an icon would "'flash' from an 'exaggerated' to a 'standard' one:"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

// "Prevent" Font Awesome from "'adding' its 'CSS'" since it'd already been "'manually' added:"
config.autoAddCss = false;

export default function Message() {
  const {
    control,
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue={''}
      name={'message'}
      render={({ field: { ref, value } }) => (
        <CustomTextField
          className={'!mb-4 !w-full'}
          error={!!errors.message}
          helperText={errors.message ? 'Please enter your message' : null}
          InputProps={{
            className: '!text-white',
            endAdornment: (
              <InputAdornment
                className={'!h-fit !text-3xl sm:!text-4xl !text-pink-400'}
                position={'end'}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </InputAdornment>
            ),
          }}
          inputRef={ref}
          label={'Message *'}
          multiline={true}
          placeholder={'Your message'}
          {...register('message', {
            onBlur: undefined,
            onChange: undefined,
            pattern: /.+/g,
            required: true,
          })}
          rows={4}
          value={value}
          variant={'outlined'}
        />
      )}
    />
  );
}
