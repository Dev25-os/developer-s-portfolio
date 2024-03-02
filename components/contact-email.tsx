import { Tailwind } from "@react-email/tailwind";
import {
  Html,
  Head,
  Body,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export default function ContactEmailTemplate(message: any, senderEmail: any) {
  console.log("m", message.message);
  console.log("m1", message.senderEmail);

  return (
    <Html>
      <Head />
      <Preview>New Message from your portfolio website</Preview>
      <Tailwind>
        <Body className="p-3 bg-white text-black">
          <Container>
            <Section>
              <Heading>You received following messages from the form</Heading>
              <Text>{message?.message} </Text>
              <Hr />
              <Text>
                Received email from : {message?.senderEmail} {message?.message}{" "}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
