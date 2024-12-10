// import { NextResponse } from 'next/server';
// import { projects } from '@/lib/data/projects';

// // export const dynamic = 'force-dynamic';
// export const dynamic = "auto";

// export async function GET(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const project = projects.find(p => p.id === params.id);
    
//     if (!project) {
//       return NextResponse.json(
//         { error: 'Project not found' },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(project);
//   } catch (error) {
//     console.error('Project API Error:', error);
//     return NextResponse.json(
//       { error: 'Internal Server Error' },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from 'next/server';
import { projects } from '@/lib/data/projects';

// Predefine all routes
export async function generateStaticParams() {
  return projects.map(project => ({ id: project.id }));
}

export const dynamic = "auto";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const project = projects.find(p => p.id === params.id);

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
