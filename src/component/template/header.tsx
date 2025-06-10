// 'use client'
// import {
//   ChevronLeft,
//   CircleUserRound,
//   MonitorStop,
//   NotebookText,
//   Pencil,
// } from 'lucide-react'
// import { useRouter } from 'next/navigation'
// import { useState } from 'react'

// export const Header = () => {
//   const router = useRouter()
//   const [showModal, setShowModal] = useState(false)
//   const auth = useAuth()
//   const handleLogout = () => {
//     auth.logout()
//     setShowModal(false)
//     router.push('/')
//   }

//   const users = JSON.parse(localStorage.getItem('users') || '[]')
//   const currentUser = users.find(
//     (user: { id: number }) => user.id === auth.currentUserId,
//   )
//   if (!currentUser) {
//     console.error('Usuário atual não encontrado')
//     return null
//   }
//   console.log('Username:', currentUser.username)

//   return (
//     <div>
//       <header>
//         <div className="flex justify-between items-center w-full h-14 px-4 bg-secondary-300">
//           <div
//             className="hover:text-primary hover:cursor-pointer transition-all ease-linear"
//             onClick={() => router.back()}
//           >
//             <ChevronLeft />
//           </div>
//           <div>
//             <Profile
//               name={currentUser.username}
//               icon={<CircleUserRound />}
//               items={[
//                 {
//                   label: 'Manual do usuário',
//                   icon: <NotebookText />,
//                   onClick: () => {
//                     router.push('/manual')
//                   },
//                 },
//                 {
//                   label: 'Alterar dados',
//                   icon: <Pencil />,
//                   onClick: () => {
//                     router.push('/account')
//                   },
//                 },
//                 {
//                   label: 'Encerrar sessão',
//                   icon: <MonitorStop />,
//                   onClick: () => {
//                     setShowModal(true)
//                   },
//                   className: 'text-danger',
//                 },
//                 {
//                   label: 'Perfil',
//                   icon: <CircleUserRound />,
//                   onClick: () => {
//                     router.push('/profile')
//                   },
//                 },
//               ]}
//             />
//           </div>
//         </div>
//         {showModal && (
//           <Modal
//             title="Encerrar sessão"
//             description="Tem certeza que deseja encerrar a sessão?"
//             buttons={[
//               {
//                 label: 'Cancelar',
//                 onClick: () => setShowModal(false),
//                 variant: 'secondary',
//               },
//               {
//                 label: 'Encerrar',
//                 onClick: handleLogout,
//                 variant: 'danger',
//               },
//             ]}
//           />
//         )}
//       </header>
//       <hr className="border border-secondary-400 opacity-35" />
//     </div>
//   )
// }
