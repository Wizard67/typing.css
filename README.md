# typing.css
typing.css 是一个负责页面文字排版的 CSS 组件，通过对常用 HTML 文本标签进行样式重置以提供更为舒适的排版效果，并且致力于解决以下问题：
  1. 排版标签语义化  
    尽可能地减少 class 和 id 的使用，让页面代码结构清晰整洁。
  2. 重视中文排版效果  
    重置部分标签样式，使之符合[中文排版需求](https://www.w3.org/TR/2015/WD-clreq-20150723/)。
  3. 响应式排版设计  
    不同分辨率采用不同的排版策略，通过对字体、行间距的调整，以优化不同设备的阅读体验。

##排版效果
  [DEMO](https://www.wizard67.com/demo/typing-css/)
##标签列表
<table>
	<thead>
	<tr>
	  <th>类型</th>
	  <th>标签</th>
	  <th>样式修改</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>全局</td>
		<td><code>.typing</code></td>
		<td>默认字体颜色:<code>#1d2935</code>，字号和行高响应分辨率。</td>
	</tr>
	<tr>
	  <td>标题</td>
	  <td><code>&#60;h1&#62;</code>~<code>&#60;h6&#62;</code></td>
	  <td>使样式符合语义，<code>&#60;h3&#62;</code>~<code>&#60;h6&#62;</code>设置统一字号。自动编号。</td>
	</tr>
	<tr>
		<td>分割线</td>
		<td><code>&#60;hr&#62;</code></td>
		<td>修改默认颜色，设置外边距。</td>
	</tr>
	<tr>
		<td>段落</td>
		<td><code>&#60;p&#62;</code></td>
		<td>默认无缩进，如需缩进可在其父级容器上添加<code>class="typing-indent"</code>。</td>
	</tr>
	<tr>
	  <td>列表</td>
	  <td><code>&#60;ul&#62;</code>|<code>&#60;ol&#62;</code>|<code>&#60;dl&#62;</code></td>
	  <td>修改无序和有序列表的列表符号，统一排版风格；增强定义列表联系。</td>
	</tr>
	<tr>
	  <td>表格</td>
	  <td><code>&#60;table&#62;</code></td>
	  <td>重置默认样式。表格外层容器添加<code>class="typing-wrap"</code>，可响应式支持。</td>
	</tr>
	<tr>
	  <td>代码块</td>
	  <td><code>&#60;pre&#62;</code></td>
	  <td>设置等宽字体。外层容器可添加<code>class="typing-wrap"。</td>
	</tr>
	<tr>
	  <td>引用块</td>
	  <td><code>&#60;blockquote&#62;</code></td>
	  <td>修改样式。可包裹其他样式列表内的标签。</td>
	</tr>
	<tr>
	  <td>内容块</td>
	  <td><code>&#60;figure&#62;</code></td>
	  <td>添加外边距，可包裹其他样式列表内的标签。</td>
	</tr>
	<tr>
	  <td>参考</td>
	  <td><code>&#60;cite&#62;</code></td>
	  <td>可设置参考文献的引用列表，正体，小号字。</td>
	</tr>
	<tr>
	  <td>短引用</td>
	  <td><code>&#60;q&#62;</code></td>
	  <td>引用符号修改为直角引号。</td>
	</tr>
	<tr>
		<td>链接</td>
		<td><code>&#60;a&#62;</code></td>
		<td>使用<code>border-bottom</code>显示下划线，修改默认颜色，<code>:hover</code>颜色继承父级。</td>
	</tr>
	<tr>
		<td>代码</td>
		<td><code>&#60;code&#62;</code></td>
		<td>继承全局字体，颜色设置为:<code>rgba(90, 9, 9, 0.8)</code>。</td>
	</tr>
	<tr>
	  <td>着重</td>
	  <td><code>&#60;em&#62;</code></td>
	  <td>正体，强调语气。在<code>Webkit内核</code>中添加着重号，<code>IE浏览器</code>内渲染为粗体。</td>
	</tr>
	<tr>
	  <td>强调</td>
	  <td><code>&#60;strong&#62;</code></td>
	  <td>正体、粗体，强调程度最高。</td>
	</tr>
	<tr>
	  <td>删除</td>
	  <td><code>&#60;del&#62;</code></td>
	  <td>默认删除线样式。</td>
	</tr>
	<tr>
	  <td>缩写</td>
	  <td><code>&#60;abbr&#62;</code></td>
	  <td>修改鼠标手势为<code>help</code>，设置底部虚线。</td>
	</tr>
	<tr>
	  <td>上下标</td>
	  <td><code>&#60;sup&#62;</code>|<code>&#60;sub&#62;</code></td>
	  <td>固定字号为<code>12px</code>，行高为<code>1</code>。</td>
	</tr>

	<tr>
	  <td>斜体</td>
	  <td><code>&#60;i&#62;</code></td>
	  <td>保持英文斜体习惯。</td>
	</tr>

	<tr>
	  <td>辅助字</td>
	  <td><code>&#60;small&#62;</code></td>
	  <td>辅助文本，降低了字号和颜色的权重。</td>
	</tr>

	<tr>
	  <td>数据</td>
	  <td><code>&#60;data&#62;</code></td>
	  <td>对于<code>open type</code>字体使用<code>frac</code>样式集。</td>
	</tr>
	<tr>
	  <td>图片</td>
	  <td><code>&#60;img&#62;</code></td>
	  <td>设置两种行内图片和块图片两种效果，具体见详解部分。</td>
	</tr>
	</tbody>
</table>
###font 与版面
typing.css 会根据<code>媒体查询</code>自动调整合适的 font 属性和版面边距。  
<table>
	<thead>
		<tr>
			<th>分辨率 (px)</th>
			<th>&#60; 544</th>
			<th>545 - 768</th>
			<th>769 - 992</th>
			<th>993 - 1380</th>
			<th>1381 &#60;</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>正文字号</td>
			<td>14 px</td>
			<td>14 px</td>
			<td>15 px</td>
			<td>16 px</td>
			<td>17 px</td>
		</tr>
		<tr>
			<td>行间距</td>
			<td>1.6</td>
			<td>1.68</td>
			<td>1.8</td>
			<td>1.82</td>
			<td>1.86</td>
		</tr>
		<tr>
			<td>段落间距</td>
			<td>1.2</td>
			<td>1.4</td>
			<td>1.6</td>
			<td>1.6</td>
			<td>1.6</td>
		</tr>
		<tr>
			<td>版面内距</td>
			<td>4 vw</td>
			<td>4 vw</td>
			<td>0.6 rem</td>
			<td>0.8 rem</td>
			<td>1 rem</td>
		</tr>
		<tr>
			<td>对齐方式</td>
			<td>左对齐</td>
			<td>左对齐</td>
			<td>两端对齐</td>
			<td>两端对齐</td>
			<td>两端对齐</td>
		</tr>
	</tbody>
</table>


