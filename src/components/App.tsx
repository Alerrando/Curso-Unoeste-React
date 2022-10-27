import Avatar from 'components/Avatar'

export function App() {
  const nome = 'Alerrando'
  const usuarios = [
    {
      primeiroNome: 'Leo',
      segundoNome: 'rogo',
      isAdmin: false
    },
    {
      primeiroNome: 'Alerrando',
      segundoNome: 'Breno',
      isAdmin: true
    },
    {
      primeiroNome: 'Daniel',
      segundoNome: 'Raposo',
      isAdmin: true
    }
  ]

  return (
    <div className="flex h-screen bg-black">
      <div className="m-auto grid">
        <Component nome="Alerrando" sobrenome="Breno" />
        {usuarios.map((usuario: any, index: number) => (
          <>
            <Component
              key={index}
              primeiroNome={usuario.primeiroNome}
              segundoNome={usuario.segundoNome}
              isAdmin={usuario.isAdmin}
            />
          </>
        ))}
      </div>
    </div>
  )
}

function Component(props: any) {
  const { primeiroNome, segundoNome, isAdmin } = props
  return (
    <div className="font-bold w-32 shadow-2xl">
      {isAdmin ? (
        <div className="text-blue-600 flex items-center justify-between">
          <h1>{primeiroNome}</h1>
          <h2>{segundoNome}</h2>
        </div>
      ) : (
        <div className="text-red-600 flex items-center justify-between">
          <h1>{primeiroNome}</h1>
          <h2>{segundoNome}</h2>
        </div>
      )}
    </div>
  )
}
