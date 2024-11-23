import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstudianteService } from '../../core/services/estudiante.service'; // Importar el servicio
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro-solicitud',
  templateUrl: './registro-solicitud.component.html',
  styleUrls: ['./registro-solicitud.component.css']
})
export class RegistroSolicitudComponent implements OnInit {
  studentData: any = {}; // Datos del estudiante
  companyData: any = {}; // Datos de la empresa
  companies: any[] = []; // Empresas del backend
  careerLines: any[] = []; // Líneas de carrera del backend
  selectedCompany: number | null = null;
  selectedCareerLine: number | null = null;

  helpPhone: string = '994343419';
  helpEmail: string = 'support@example.com';
  showConfirmation: boolean = false; // Mostrar mensaje de confirmación

  constructor(
    private http: HttpClient,
    private estudianteService: EstudianteService, // Servicio para cargar datos del estudiante
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadStudentData(); // Cargar datos del estudiante
    this.loadInitialData(); // Cargar datos iniciales como empresas y líneas de carrera
  }

  loadStudentData() {
    this.estudianteService.getDatosEstudiante().subscribe(
      (data) => {
        console.log('Datos del estudiante:', data);
        this.studentData = data; // Asignar los datos del backend a studentData
      },
      (error) => {
        this.toastr.error('Error al cargar los datos del estudiante', 'Error');
        console.error(error);
      }
    );
  }

  loadInitialData() {
    this.http.get<any>('http://localhost:8080/api/solicitud/inicial').subscribe(
      (data) => {
        this.companies = data.empresas;
        this.careerLines = data.lineasCarrera;
      },
      (error) => {
        this.toastr.error('Error al cargar los datos iniciales', 'Error');
        console.error(error);
      }
    );
  }

  validateAndSubmit() {
    const isStudentDataComplete = this.studentData.nombre && this.studentData.codigo && this.studentData.dni && this.studentData.telefono && this.studentData.email;
    const isCompanyAndCareerSelected = this.selectedCompany && this.selectedCareerLine;
    const isCompanyDataComplete = this.companyData.name && this.companyData.ruc && this.companyData.address && this.companyData.phone;

    if (isStudentDataComplete && (isCompanyAndCareerSelected || isCompanyDataComplete)) {
      const solicitudData = {
        estudiante: {
          codigo: this.studentData.codigo,
          nombre: this.studentData.nombre
        },
        idEmpresa: this.selectedCompany,
        idLineaCarrera: this.selectedCareerLine,
        nombreEmpresa: this.companyData.name || null,
        rucEmpresa: this.companyData.ruc || null,
        direccionEmpresa: this.companyData.address || null,
        telefonoEmpresa: this.companyData.phone || null,
        correoEmpresa: this.companyData.email || null,
      };

      this.http.post('http://localhost:8080/api/solicitud/inicial', solicitudData).subscribe(
        () => {
          this.showConfirmation = true;
          this.toastr.success('Datos enviados exitosamente', 'Éxito');
        },
        (error) => {
          this.toastr.error('Error al enviar la solicitud', 'Error');
          console.error(error);
        }
      );
    } else {
      this.toastr.error('Por favor, complete los datos requeridos', 'Error');
    }
  }
}