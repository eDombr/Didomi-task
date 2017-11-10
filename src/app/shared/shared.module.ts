import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    MatToolbarModule,
} from '@angular/material';

const modules: Array<any> = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    MatToolbarModule,
];


@NgModule({
    imports: [
        ...modules
    ],
    exports: [
        ...modules
    ]
})
export class SharedModule { }
