import React, { useState } from "react";
import { View } from "react-native";
import gstyle from "../../../../theme/styles/global";
import TextInputCustom from "../../../../components/common/textInput/TextInputCustom.component";
import { IStudent } from "../../../../types/responses/tanstack/student.type";
import ButtonCustom from "../../../../components/common/button/ButtonCustom.component";

type TFormState = Omit<IStudent, "id">;

const AddStudent = () => {
  const initialFormState: TFormState = {
    avatar: "",
    btc_address: "",
    country: "",
    email: "",
    first_name: "",
    gender: "",
    last_name: "",
  };

  const [formState, setFormState] = useState<TFormState>(initialFormState);

  const handleChangeField = (name: keyof TFormState) => (text: string) => {
    setFormState((prev) => ({ ...prev, [name]: text }));
  };

  const handleSubmit = () => {
    console.log(formState);
  };

  return (
    <View style={[gstyle.container, { alignItems: "center" }]}>
      <TextInputCustom
        value={formState.avatar}
        onChangeText={handleChangeField("avatar")}
        placeholder="avatar"
      />
      <TextInputCustom
        value={formState.btc_address}
        onChangeText={handleChangeField("btc_address")}
        placeholder="btc_address"
      />
      <TextInputCustom
        value={formState.country}
        onChangeText={handleChangeField("country")}
        placeholder="country"
      />
      <TextInputCustom
        value={formState.email}
        onChangeText={handleChangeField("email")}
        placeholder="email"
      />
      <TextInputCustom
        value={formState.first_name}
        onChangeText={handleChangeField("first_name")}
        placeholder="first_name"
      />
      <TextInputCustom
        value={formState.last_name}
        onChangeText={handleChangeField("last_name")}
        placeholder="last_name"
      />
      <TextInputCustom
        value={formState.gender}
        onChangeText={handleChangeField("gender")}
        placeholder="gender"
      />
      <ButtonCustom label="Add Student" onPress={handleSubmit} />
    </View>
  );
};

export default AddStudent;
