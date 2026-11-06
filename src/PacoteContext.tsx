import { createContext, useReducer, type ReactNode } from "react";
import type { PacoteType } from "./types";
import type { AcaoPacote } from "./pacoteReducer";
import pacoteReducer from "./pacoteReducer";

export const PacotesContext = createContext<Array<PacoteType>>([]);
export const PacotesDispacherContext = createContext<React.Dispatch<AcaoPacote> | null>(null);


const data: Array<PacoteType> = [
    {
        id: "37de637a-c50f-4f47-a43c-6873457da0d0",
        largura: 20.0,
        altura: 30.0,
        profundidade: 40.0,
        peso: 2.34
    },
    {
        id: "c05bfc0b-48dd-466c-b2a3-f2c193cdbadd",
        largura: 40.0,
        altura: 20.0,
        profundidade: 10.0,
        peso: 3.14
    },
]


type PacoteProviderProps = {
    children: ReactNode;
}

export function PacoteProvider({ children }: PacoteProviderProps) {
    const [pacotes, dispacher] = useReducer(pacoteReducer, data);
    return (
        <PacotesContext value={pacotes}>
            <PacotesDispacherContext value={dispacher}>
                {children}
            </PacotesDispacherContext>
        </PacotesContext>
    );
}