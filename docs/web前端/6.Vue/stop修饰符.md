## 阻止冒泡

冒泡指的是，当一个元素本身具有一个点击事件。而他的子元素也有一个点击事件，你去点击他的子元素，既会触发子元素又会触发父元素。这样的行为就叫做事件的冒泡。

如何去阻止事件的冒泡呢

使用 `stop` 事件修饰符就可以了。