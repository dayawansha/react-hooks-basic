import React from "react";
import { ContactContextProvider } from "../context/contact-context";

export default function Contacts() {
    return (
        <ContactContextProvider>
            <div>
                <Header as="h3">Contacts</Header>
                <ContactForm />
                <ContactTable />
            </div>
        </ContactContextProvider>
    );
}