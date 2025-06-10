// import { ReactNode } from 'react'
// import { Home, Plus } from 'lucide-react'
// import { Sidebar } from '../sidebar'

// type AppLayoutProps = {
//   children: ReactNode
//   sidebarOptions?: Array<{
//     label: string
//     icon: ReactNode
//     href: string
//   }>
// }

// const defaultSidebarOptions = [
//   {
//     label: 'Home',
//     icon: <Home key="home" />,
//     href: '/home',
//   },
//   {
//     label: 'Criar projeto',
//     icon: <Plus key="plus-create" />,
//     href: '/projects/create',
//   },
//   {
//     label: 'Administração',
//     icon: <Plus key="plus-admin" />,
//     href: '/admin',
//   },
// ]

// export default function AppLayout({
//   children,
//   sidebarOptions = defaultSidebarOptions,
// }: AppLayoutProps) {
//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
//       <Sidebar options={sidebarOptions} />
//       <div className="flex flex-col flex-1">
//         <header className="px-8 py-4 border-b border-gray-800 bg-gray-950/80 backdrop-blur-md shadow-md">
//           {/* Adicione aqui um título ou navegação superior se desejar */}
//         </header>
//         <main className="flex-1 p-8 bg-gray-950/60 rounded-tl-3xl shadow-inner transition-all duration-300">
//           {children}
//         </main>
//       </div>
//     </div>
//   )
// }
