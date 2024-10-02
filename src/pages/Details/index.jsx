import { Container, Links} from './styles.js'

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';

export function Details() {

    return(
        <Container>
            <Header />
            <Section title="Links Uteis">
                <Links>
                    <li><a href="#"> google.com </a></li>
                    <li><a href="#"> amazon.com.br </a></li>
                </Links>
            </Section>
            <Button title= "Voltar" />

        </Container>
    )
}