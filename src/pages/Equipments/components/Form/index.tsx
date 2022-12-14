/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { v4 } from 'uuid';

import swal from 'sweetalert2';

import { Formik } from 'formik';
import { fi } from 'date-fns/locale';
import SelectInput from '../../../../components/SelectInput';
import cloudIcon from '../../../../assets/icons/cloud-icon.svg';

import {
  Container,
  Title,
  ButtonWrapper,
  ContainerInputFile,
  UploadInput,
  SendImageText,
} from './styles';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

import {
  createEquipment,
  updateEquipment,
} from '../../../../services/equipments.service';

import validations from './validations';

interface Equipment {
  cod_equipamento: string;
  descricao: string;
  status: number;
  imagem?: string;
}

interface FormProps {
  title: string;
  equipmentSelected?: Equipment;
  handleImg: (imgString: string) => void;
  onSave: () => void;
}

const Form: React.FC<FormProps> = ({
  title,
  equipmentSelected,
  handleImg,
  onSave,
}) => {
  const isEquipmentSelected = Object.keys(equipmentSelected || {});
  const code = v4();
  let fileName = '';
  const swalSuccess = (message: string) => {
    return swal.fire({
      title: 'Tudo certo!',
      icon: 'success',
      text: message || '',
      confirmButtonColor: '#FF5427',
    });
  };

  const swalError = (message: string) => {
    return swal.fire({
      title: 'Ops, algo deu errado!',
      icon: 'error',
      text: message || 'Erro desconhecido',
      confirmButtonColor: '#FF5427',
    });
  };

  return (
    <Formik
      initialValues={{
        descricao: '',
        imagem: '',
        ...equipmentSelected,
      }}
      enableReinitialize
      onSubmit={values => {
        const formData = new FormData();

        const file = (values.imagem as any)[0];

        formData.append('descricao', values.descricao);
        formData.append('cod_equipamento', code);
        formData.append(
          'status',
          Number(values.status) === 1 ? 'true' : 'false',
        );

        if (file) {
          formData.append('imagemFile', file);
        }

        if (isEquipmentSelected.length) {
          return updateEquipment(
            equipmentSelected?.cod_equipamento || '',
            formData,
          )
            .then(() => {
              swalSuccess('Equipamento editado com sucesso!');
              onSave();
            })
            .catch(message =>
              swalError(
                message.response.data ||
                  'Um erro ocorreu na edi????o do equipamento. Revise as informa????es e tente novamente',
              ),
            );
        }

        return createEquipment(formData)
          .then(() => {
            swalSuccess('Equipamento criado com sucesso!');
            onSave();
          })
          .catch(message =>
            swalError(
              message.response.data ||
                'Um erro ocorreu na cria????o do equipamento. Revise as informa????es e tente novamente',
            ),
          );
      }}
      validationSchema={validations}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting,
        setFieldValue,
      }) => (
        <Container>
          <Title>
            {isEquipmentSelected.length > 0 ? 'Editar Equipamento' : title}
          </Title>

          <Input
            name="descricao"
            width="100%"
            labelText="DESCRI????O*"
            hasError={
              !!errors.descricao && touched.descricao && !!errors.descricao
            }
            errorMessage={errors.descricao}
            value={values.descricao}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Insira a descri????o do equipamento"
          />
          <Input
            width="100%"
            name="cod_equipamento"
            labelText="C??digo"
            disabled
            value={code}
          />

          <SelectInput
            options={[
              { label: 'Ativado', id: 1 },
              { label: 'Inativado', id: 0 },
            ]}
            consideredValue="id"
            width="100%"
            name="status"
            labelText="STATUS*"
            hasError={!!errors.status && touched.status && !!errors.status}
            errorMessage={errors.status}
            value={values.status}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <ContainerInputFile htmlFor="input-file">
            <img src={cloudIcon} alt="cloud icon" />
            <SendImageText>Enviar Imagem</SendImageText>
            <SendImageText>{fileName}</SendImageText>
            <UploadInput
              accept="image/*"
              onChange={e => {
                setFieldValue('imagem', e.currentTarget.files);
                fileName = e.currentTarget.files
                  ? e.currentTarget?.files[0]?.name
                  : '';
              }}
              name="imagem"
              id="input-file"
              type="file"
            />
          </ContainerInputFile>

          {equipmentSelected?.imagem && (
            <a
              onClick={e => {
                e.preventDefault();
                handleImg(equipmentSelected.imagem || '');
              }}
              href=""
            >
              Visualizar imagem
            </a>
          )}

          <ButtonWrapper>
            <Button type="submit" full disabled={isSubmitting}>
              {isEquipmentSelected.length > 0 ? 'Editar' : 'Adicionar'}
            </Button>
          </ButtonWrapper>
        </Container>
      )}
    </Formik>
  );
};

export default Form;
