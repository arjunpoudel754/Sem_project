from django.contrib import admin
from .models import Course, Module, Lesson, Question

class QuestionInline(admin.TabularInline):
    model = Question
    extra = 5 # This automatically shows 5 empty slots for your questions!
    max_num = 5

class LessonAdmin(admin.ModelAdmin):
    inlines = [QuestionInline]
    list_display = ('label', 'title', 'module')
    list_filter = ('module',)

admin.site.register(Course)
admin.site.register(Module)
admin.site.register(Lesson, LessonAdmin)