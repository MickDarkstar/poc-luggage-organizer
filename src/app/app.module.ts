import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ItemComponent } from './components/item/item.component';

@NgModule({
  imports: [BrowserModule, FormsModule, DragDropModule],
  declarations: [AppComponent, HelloComponent, ItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
