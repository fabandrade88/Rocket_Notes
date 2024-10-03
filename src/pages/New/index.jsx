import { Link } from "react-router-dom";
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'


import { Container, Form } from './styles'

export function New() {
    return(
        <Container>
            <Header />

            <main>
                <Form>
                <header>
                    <h1> Criar nota</h1>
                    <Link to="/">Voltar</Link>            </header>

                <Input placeholder ="Titulo"/>
                <Textarea />
                </Form>
            </main>
        </Container>
    );
}