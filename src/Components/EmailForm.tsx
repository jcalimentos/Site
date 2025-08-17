"use client";
import { useState } from "react";
import TextField from "./TextField";
import Message from "./Message";
import Card from "./Card";
import { useForm, validate, resolver } from "@/hooks/useForm";

interface FormInputs {
  fullName: string;
  company?: string;
  email: string;
  phone: string;
  clientType: string;
  message: string;
}

const schema = {
  fullName: validate()
    .required("Campo obrigatório")
    .min(3, "O campo precisa ter no mínimo 3 letras")
    .max(50, "Limite máximo de 50 caracteres atingido"),
  email: validate().required("Campo obrigatório").email("Email inválido"),
  phone: validate()
    .required("Campo obrigatório")
    .min(10, "Número de telefone inválido")
    .max(15, "Número de telefone inválido"),
  clientType: validate().required("Campo obrigatório"),
  message: validate()
    .required("Campo obrigatório")
    .min(10, "O campo precisa ter no mínimo 10 letras")
    .max(750, "Limite máximo de 750 caracteres atingido"),
};

export default function EmailForm() {
  const [showMessage, setShowMessage] = useState(false);
  const [showError, setShowError] = useState(false);

  const { register, handleSubmit, errors, isSubmitting, setValue } =
    useForm<FormInputs>({
      resolver: resolver(schema),
    });

  const sendEmail = async (data: FormInputs) => {
    // Validação manual do clientType
    if (
      data.clientType !== "Consumidor final" &&
      data.clientType !== "Empresa"
    ) {
      console.error("Tipo de cliente inválido");
      setShowError(true);
      return;
    }

    // Validação manual do campo company (opcional)
    if (data.company && data.company.length > 50) {
      console.error("Nome da empresa muito longo");
      setShowError(true);
      return;
    }

    // Validação do clientType
    if (
      data.clientType !== "Consumidor final" &&
      data.clientType !== "Empresa"
    ) {
      console.error("Tipo de cliente inválido");
      setShowError(true);
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowMessage(true);
        setValue("fullName", "");
        setValue("company", "");
        setValue("email", "");
        setValue("phone", "");
        setValue("clientType", "Consumidor final");
        setValue("message", "");
      } else {
        const err = await response.json();
        console.error("Erro no envio:", err);
        setShowError(true);
      }
    } catch (e) {
      console.error("Erro no fetch:", e);
      setShowError(true);
    }
  };

  return (
    <section className="rise mx-auto w-full flex-1 animate-fadeIn">
      <Card className="flex flex-col gap-5 shadow-none">
        <form
          method="POST"
          className="flex flex-col gap-3"
          onSubmit={handleSubmit(sendEmail)}
        >
          <div>
            <TextField
              {...register("fullName")}
              error={Boolean(errors.fullName)}
            >
              Nome completo
            </TextField>
            {errors.fullName && (
              <span className="text-xs text-red-700">⛔ {errors.fullName}</span>
            )}
          </div>

          <div>
            <TextField {...register("company")} error={Boolean(errors.company)}>
              Nome da empresa (opcional)
            </TextField>
            {errors.company && (
              <span className="text-xs text-red-700">⛔ {errors.company}</span>
            )}
          </div>

          <div>
            <TextField {...register("email")} error={Boolean(errors.email)}>
              E-mail
            </TextField>
            {errors.email && (
              <span className="text-xs text-red-700">⛔ {errors.email}</span>
            )}
          </div>

          <div>
            <TextField {...register("phone")} error={Boolean(errors.phone)}>
              Telefone/WhatsApp
            </TextField>
            {errors.phone && (
              <span className="text-xs text-red-700">⛔ {errors.phone}</span>
            )}
          </div>

          <div>
            <label className="block mb-1 font-semibold text-sm">
              Tipo de cliente
            </label>
            <div className="flex gap-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="Consumidor final"
                  {...register("clientType")}
                  defaultChecked
                  className="mr-2"
                />
                Consumidor final
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="Empresa"
                  {...register("clientType")}
                  className="mr-2"
                />
                Empresa
              </label>
            </div>
            {errors.clientType && (
              <span className="text-xs text-red-700">
                ⛔ {errors.clientType}
              </span>
            )}
          </div>

          <div>
            <TextField
              {...register("message")}
              error={Boolean(errors.message)}
              className="resize-none text-sm"
              cols={20}
              rows={7}
              multiline
            >
              Mensagem
            </TextField>
            {errors.message && (
              <span className="text-xs text-red-700">⛔ {errors.message}</span>
            )}
          </div>

          <button
            className="bg-botao-enviar text-white font-semibold text-lg cursor-pointer p-14 mx-auto mt-6 rounded-md duration-200 hover:brightness-110"
            type="submit"
            disabled={isSubmitting}
          >
            Enviar
          </button>
        </form>

        <Message show={showMessage} onClose={() => setShowMessage(false)}>
          Mensagem enviada com sucesso!
        </Message>

        <Message show={showError} onClose={() => setShowError(false)}>
          Um erro ocorreu, tente novamente mais tarde!
        </Message>
      </Card>
    </section>
  );
}
