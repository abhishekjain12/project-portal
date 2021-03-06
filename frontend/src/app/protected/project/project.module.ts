import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {projectRoute} from './project.route';
import {ProjectComponent} from './project.component';
import {ProjectService} from './project.service';
import {MatCardModule} from '@angular/material/card';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {SpinnerModule} from '../../layout/spinner/spinner.module';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatChipsModule} from '@angular/material/chips';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import {MatListModule} from "@angular/material/list";
import {DateAgoPipe} from "../../shared/pipe/date-ago.pipe";
import { ActionModalComponent } from './project-details/action-modal/action-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {AlertModule} from "../../layout/alert/alert.module";
import {FormsModule} from "@angular/forms";
import { SaveProjectModalComponent } from './save-project-modal/save-project-modal.component';
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatMenuModule} from "@angular/material/menu";
import { SentEmailModalComponent } from './project-details/sent-email-modal/sent-email-modal.component';
import {MatTabsModule} from "@angular/material/tabs";



@NgModule({
  declarations: [
    ProjectComponent,
    ProjectDetailsComponent,
    DateAgoPipe,
    ActionModalComponent,
    SaveProjectModalComponent,
    SentEmailModalComponent
  ],
    imports: [
        RouterModule.forChild(projectRoute),
        CommonModule,
        MatCardModule,
        FlexModule,
        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        SpinnerModule,
        MatTableModule,
        MatSortModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatIconModule,
        MatPaginatorModule,
        MatChipsModule,
        MatListModule,
        MatDialogModule,
        AlertModule,
        FormsModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMenuModule,
        MatTabsModule
    ],
  providers: [
    ProjectService
  ]
})
export class ProjectModule { }
