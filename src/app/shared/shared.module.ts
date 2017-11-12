import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule
} from '@angular/material';

const modules: Array<any> = [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule
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
