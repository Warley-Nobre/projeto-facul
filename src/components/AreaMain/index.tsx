import React from 'react';

import {
  Container, NewTikets, IconArrow, InputTitle,
  SelectTiket, Organiza, Organiza2, Divisor,
  DivButton, ButtonCancel, ButtonOpen, IconCancel, IconOpen,
  ColorPrioryt, DivPrioryt, DivDescricao, InputDescricao,LabelTiket
} from './styles';

const AreaMain: React.FC = () => {
  return (
    <Container>

      <NewTikets> <IconArrow />    Criar Novo Ticket</NewTikets>

      <Organiza2>

        <Organiza>

          <LabelTiket>Título</LabelTiket> 
          <InputTitle></InputTitle> 

          <DivPrioryt>

            Prioridade <ColorPrioryt />

          </DivPrioryt>

          <SelectTiket>
            <option value="AT">Alta</option>
            <option value="MD">Média</option>
            <option value="BX">Baixa</option>
          </SelectTiket>

          <LabelTiket>Classificação</LabelTiket>  
          <SelectTiket>
            <option value="SP">Suporte Operacional</option>
          </SelectTiket>

          <LabelTiket>Responsavél</LabelTiket>
          <SelectTiket>
            <option value="TC1">Time de Sustentação C1</option>
            <option value="TC@">Time de Sustentação C2</option>
          </SelectTiket>

        </Organiza>

        <DivDescricao>

          <LabelTiket>Descrição</LabelTiket>
          <form>

            <InputDescricao />

          </form>

        </DivDescricao>


      </Organiza2>

      <Divisor />

      <DivButton>

        <ButtonCancel> Cancelar  <IconCancel />  </ButtonCancel>

        <ButtonOpen> Abrir Tikets <IconOpen />    </ButtonOpen>

      </DivButton>

    </Container>

  )
}

export default AreaMain;