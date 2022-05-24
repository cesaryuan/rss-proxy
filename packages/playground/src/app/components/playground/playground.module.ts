import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PlaygroundComponent } from './playground.component';
import { RefineFeedModule } from '../refine-feed/refine-feed.module';
import { GenericFeedsModule } from '../generic-feeds/generic-feeds.module';
import { NativeFeedsModule } from '../native-feeds/native-feeds.module';
import { OptionsModule } from '../options/options.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [PlaygroundComponent],
  exports: [PlaygroundComponent],
  entryComponents: [PlaygroundComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    RefineFeedModule,
    GenericFeedsModule,
    NativeFeedsModule,
    OptionsModule,
    FooterModule,
  ],
})
export class PlaygroundModule {}
