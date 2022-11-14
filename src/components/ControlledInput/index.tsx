import { Control, Controller } from 'react-hook-form';
import { TextInput } from 'react-native-gesture-handler';

interface Props {
  control: Control;
  name: string;
}

const ControlledInput: React.FC<Props> = ({ control, name}) => {
  return( 
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }})=> {
        return (
          <TextInput 
            onChangeText={onChange}
            value={value}
          />
        )
      }}
    />
  )
}

export default ControlledInput;