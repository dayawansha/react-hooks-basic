import React from "react";
import { CounterContextProvider } from "../context/counter-context";
import CounterDisplay from "../components/counter-display";
import CounterButtons from "../components/counter-buttons";

export default function CounterView() {
    return (
        <CounterContextProvider>
            <h3>Counter</h3>
                <CounterDisplay />
                <CounterButtons />
        </CounterContextProvider>
    );
}