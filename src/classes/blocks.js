import { row, col, css } from '../utils';

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error('Method toHTML should be implemented');
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    console.log(this.options);
    const { tag = 'h2', styles } = this.options;
    return row(
      col(`<${tag}>
            ${this.value}
    </${tag}>`),
      css(styles)
    );
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { imageStyles: is, styles, alt = '' } = this.options;
    return row(
      ` <img style='${css(is)}' alt='${alt}' src="${this.value}"/>`,
      css(styles)
    );
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { styles } = this.options;
    let html = this.value.map(col).join('');
    return row(html, css(styles));
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { tag = 'p', styles } = this.options;
    return row(
      col(` <${tag}>
            ${this.value}
        </${tag}>`),
      css(styles)
    );
  }
}
