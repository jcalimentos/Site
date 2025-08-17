import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_USER = process.env.EMAIL_USER!;
const EMAIL_PASS = process.env.EMAIL_PASS!;
const EMAIL_TO = process.env.EMAIL_TO!;

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const {
      fullName,
      company,
      email,
      phone,
      clientType,
      message,
    } = data;

    // Validação simples
    if (
      !fullName ||
      !email ||
      !phone ||
      !clientType ||
      !message ||
      (clientType !== "Consumidor final" && clientType !== "Empresa")
    ) {
      return NextResponse.json(
        { error: "Campos obrigatórios faltando ou inválidos." },
        { status: 400 }
      );
    }

    // Configuração do transporter nodemailer com Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // Monta corpo do email
    const emailContent = `
      <p><strong>Nome completo:</strong> ${fullName}</p>
      <p><strong>Nome da empresa:</strong> ${company || "Não informado"}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Telefone/WhatsApp:</strong> ${phone}</p>
      <p><strong>Tipo de cliente:</strong> ${clientType}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${message}</p>
    `;

    // Envia email
    await transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_TO,
      subject: `Novo Lead - ${fullName}`,
      html: emailContent,
    });

    return NextResponse.json({ message: "Email enviado com sucesso" });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { error: "Erro interno ao enviar o email." },
      { status: 500 }
    );
  }
}

// Se quiser bloquear outros métodos, pode exportar funções GET, PUT, DELETE que retornam 405.
