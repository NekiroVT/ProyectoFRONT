export interface SolicitudDto {
    idEstudiante: number | null;
    idEmpresa: number | null;
    idLineaCarrera: number | null;
    nombreEmpresa: string | null;
    rucEmpresa: string | null;
    direccionEmpresa: string | null;
    telefonoEmpresa: string | null;
    correoEmpresa: string | null;
    empresas: EmpresaDto[];
    lineasCarrera: LineaCarreraDto[];
  }
  
  export interface EmpresaDto {
    id: number;
    razonSocial: string;
  }
  
  export interface LineaCarreraDto {
    id: number;
    nombre: string;
  }