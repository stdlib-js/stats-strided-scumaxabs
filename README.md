<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# scumaxabs

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the cumulative maximum absolute value of single-precision floating-point strided array elements.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import scumaxabs from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-strided-scumaxabs@esm/index.mjs';
```

#### scumaxabs( N, x, strideX, y, strideY )

Computes the cumulative maximum absolute value of single-precision floating-point strided array elements.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
var y = new Float32Array( x.length );

scumaxabs( x.length, x, 1, y, 1 );
// y => <Float32Array>[ 1.0, 2.0, 2.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: stride length for `x`.
-   **y**: output [`Float32Array`][@stdlib/array/float32].
-   **strideY**: stride length for `y`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to compute the cumulative maximum absolute value of every other element in `x`,

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var x = new Float32Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );
var y = new Float32Array( x.length );

var v = scumaxabs( 4, x, 2, y, 1 );
// y => <Float32Array>[ 1.0, 2.0, 2.0, 4.0, 0.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

// Initial arrays...
var x0 = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var y0 = new Float32Array( x0.length );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

scumaxabs( 4, x1, -2, y1, 1 );
// y0 => <Float32Array>[ 0.0, 0.0, 0.0, 4.0, 4.0, 4.0, 4.0, 0.0 ]
```

#### scumaxabs.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Computes the cumulative maximum absolute value of single-precision floating-point strided array elements using alternative indexing semantics.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
var y = new Float32Array( x.length );

scumaxabs.ndarray( x.length, x, 1, 0, y, 1, 0 );
// y => <Float32Array>[ 1.0, 2.0, 2.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, offset parameters support indexing semantics based on starting indices. For example, to calculate the cumulative maximum absolute value of every other element in `x` starting from the second element and to store in the last `N` elements of `y` starting from the last element

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var y = new Float32Array( x.length );

scumaxabs.ndarray( 4, x, 2, 1, y, -1, y.length-1 );
// y => <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 4.0, 2.0, 2.0, 1.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `y` unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@esm/index.mjs';
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import scumaxabs from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-strided-scumaxabs@esm/index.mjs';

var x = discreteUniform( 10, -50, 50, {
    'dtype': 'float32'
});
var y = new Float32Array( x.length );
console.log( x );
console.log( y );

scumaxabs( x.length, x, 1, y, -1 );
console.log( y );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-base/cumaxabs`][@stdlib/stats/base/cumaxabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum absolute value of a strided array.</span>
-   <span class="package-name">[`@stdlib/stats-strided/dcumaxabs`][@stdlib/stats/strided/dcumaxabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum absolute value of double-precision floating-point strided array elements.</span>
-   <span class="package-name">[`@stdlib/stats-strided/scumax`][@stdlib/stats/strided/scumax]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum of single-precision floating-point strided array elements.</span>
-   <span class="package-name">[`@stdlib/stats-base/scuminabs`][@stdlib/stats/base/scuminabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum absolute value of single-precision floating-point strided array elements.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-strided-scumaxabs.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-strided-scumaxabs

[test-image]: https://github.com/stdlib-js/stats-strided-scumaxabs/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-strided-scumaxabs/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-strided-scumaxabs/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-strided-scumaxabs?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-strided-scumaxabs.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-strided-scumaxabs/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-strided-scumaxabs/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-strided-scumaxabs/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-strided-scumaxabs/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-strided-scumaxabs/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-strided-scumaxabs/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-strided-scumaxabs/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-strided-scumaxabs/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-strided-scumaxabs/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32/tree/esm

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/base/cumaxabs]: https://github.com/stdlib-js/stats-base-cumaxabs/tree/esm

[@stdlib/stats/strided/dcumaxabs]: https://github.com/stdlib-js/stats-strided-dcumaxabs/tree/esm

[@stdlib/stats/strided/scumax]: https://github.com/stdlib-js/stats-strided-scumax/tree/esm

[@stdlib/stats/base/scuminabs]: https://github.com/stdlib-js/stats-base-scuminabs/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
