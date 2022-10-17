import { X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

import { CloseButton, Content, Overlay } from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form>
          <input placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input placeholder="Categoria" required />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
