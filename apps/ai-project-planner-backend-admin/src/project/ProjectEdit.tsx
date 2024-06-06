import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
} from "react-admin";

import { FunctionalRequirementTitle } from "../functionalRequirement/FunctionalRequirementTitle";
import { LibraryFrameworkTitle } from "../libraryFramework/LibraryFrameworkTitle";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="functionalRequirements"
          reference="FunctionalRequirement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FunctionalRequirementTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="libraryFrameworks"
          reference="LibraryFramework"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LibraryFrameworkTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="tools" multiline source="tools" />
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
