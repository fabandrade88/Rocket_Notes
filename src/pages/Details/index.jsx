import { Container, Links, Content} from './styles.js'

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import  { ButtonText } from '../../components/ButtonText';

export function Details() {

    return(
        <Container>
            <Header />

            <main>
                <Content>
            <ButtonText title="Excluir Notas"/>
            <h1>
                Introducao ao React
            </h1>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Hic necessitatibus, corporis, nesciunt eveniet harum amet, aut 
                consectetur consequuntur aliquam expedita recusandae aperiam illum 
                mollitia. Optio accusamus quod iure id fugiat.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Hic necessitatibus, corporis, nesciunt eveniet harum amet, aut 
                consectetur consequuntur aliquam expedita recusandae aperiam illum 
                mollitia. Optio accusamus quod iure id fugiat.
            </p>
            <Section title="Links Uteis">
                <Links>
                    <li><a href="#"> google.com </a></li>
                    <li><a href="#"> amazon.com.br </a></li>
                </Links>
            </Section>

            <Section title="Marcadores">
                <Tag  title="express"/>
                <Tag title="nodejs"/>

            </Section>
            <Button title= "Voltar" />

            </Content>
            </main>

        </Container>
    )
}