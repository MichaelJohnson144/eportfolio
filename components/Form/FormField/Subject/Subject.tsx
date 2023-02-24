import { Controller, useFormContext } from "react-hook-form";
import { InputAdornment } from "@mui/material";
import { CustomTextField } from "../TextFieldStyle";
// The following imports will "'prevent' a 'Font Awesome icon' ''SSR' bug,'" where an icon would "'flash' from an 'exaggerated' to a 'standard' one:"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

// "Prevent" Font Awesome from "'adding' its 'CSS'" since it'd already been "'manually' added:"
config.autoAddCss = false;

export default function Subject() {
  const {
    control,
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue={''}
      name={'subject'}
      render={({ field: { ref, value } }) => (
        <CustomTextField
          className={'!w-full'}
          error={!!errors.subject}
          helperText={errors.subject ? 'Please enter a subject' : null}
          InputProps={{
            endAdornment: (
              <InputAdornment
                className={'!h-fit !text-3xl sm:!text-4xl !text-pink-400'}
                position={'end'}
              >
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
              </InputAdornment>
            ),
          }}
          inputRef={ref}
          label={'Subject *'}
          placeholder={'Subject'}
          {...register('subject', {
            onBlur: undefined,
            onChange: undefined,
            pattern: /.+/g,
            required: true,
          })}
          value={value}
          variant={'outlined'}
        />
      )}
    />
  );
}
