import { NgModule, ModuleWithProviders } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatIconModule } from '@angular/material/icon';
import { SvgIconComponent } from '../components/svg-icon/svg-icon.component';
import { SharedModule } from '../shared.module';
import { CommonModule } from '@angular/common';

import { ToastComponent } from './toast.component';
import {
  defaultToastConfig,
  ToastConfig,
  TOAST_CONFIG_TOKEN
} from './toast-config';

@NgModule({
  imports: [OverlayModule, MatIconModule, SharedModule, CommonModule],
  declarations: [ToastComponent],
})
export class ToastModule {
  public static forRoot(
    config: ToastConfig = defaultToastConfig
  ): ModuleWithProviders<ToastModule> {
    return {
      ngModule: ToastModule,
      providers: [
        {
          provide: TOAST_CONFIG_TOKEN,
          useValue: config
        }
      ]
    };
  }
}
